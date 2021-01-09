<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="ingresos"
      class="elevation-1"
      :search="search"
      v-show="!newEnter"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Ingresos</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-text-field
            v-model="search"
            prepend-icon="mdi-magnify"
            label="Buscar"
            single-line
            hide-details
            justify="center"
          ></v-text-field>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            dark
            class="mb-2"
            v-bind="attrs"
            v-on="on"
            @click="changeNewEnter"
          >
            Nuevo Item
          </v-btn>

          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title v-if="!actionType" class="headline"
                >¿Estás seguro de desactivar este item?</v-card-title
              >
              <v-card-title v-else class="headline"
                >¿Estás seguro de activar este item?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete"
                  >Cancelar</v-btn
                >
                <v-btn
                  v-if="!actionType"
                  color="blue darken-1"
                  text
                  @click="deactivateItemConfirm"
                  >Desactivar</v-btn
                >
                <v-btn
                  v-else
                  color="blue darken-1"
                  text
                  @click="activateItemConfirm"
                  >Activar</v-btn
                >
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)">
          mdi-pencil
        </v-icon>
        <v-icon v-if="item.status === 1" small @click="deactivateItem(item)">
          mdi-cancel
        </v-icon>
        <v-icon v-else small @click="activateItem(item)">
          mdi-check
        </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="getIngresos">
          Reset
        </v-btn>
      </template>
      <template v-slot:item.status="{ item }">
        <v-chip :color="getColor(item.status)" dark>
          {{ statusName(item.status) }}
        </v-chip>
      </template>
    </v-data-table>
    <v-row v-show="newEnter" class="px-16 pb-16">
      <v-col cols="12" sm="4">
        <v-combobox
          v-model="tipoComprobante"
          label="Tipo de comprobante"
          :items="tiposComprobante"
          :rules="[rules.required]"
        ></v-combobox>
      </v-col>
      <v-col cols="12" sm="4">
        <v-text-field
          v-model="serieComprobante"
          label="Serie de comprobante"
          :rules="[rules.required, rules.min]"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="4">
        <v-text-field
          v-model="numComprobante"
          label="Número de comprobante"
          :rules="[rules.required, rules.min]"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="8">
        <v-combobox
          v-model="proveedor"
          label="Proveedor"
          :items="proveedores"
          :rules="[rules.required]"
        ></v-combobox>
      </v-col>
      <v-col cols="12" sm="4">
        <v-text-field
          v-model="impuesto"
          label="Impuesto"
          :rules="[rules.required, rules.min]"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="8">
        <v-text-field
          v-model="codigo"
          label="Código"
          :rules="[rules.required, rules.min]"
          @keyup.enter="buscarCodigo"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="1">
        <v-btn class="mx-2" fab dark small color="teal">
          <v-icon dark>
            mdi-format-list-bulleted-square
          </v-icon>
        </v-btn>
      </v-col>
      <v-col cols="12" sm="3">
        <p v-show="errorCodeMessage" class="red--text">
          El código ingresado no pertenece a ningún artículo
        </p>
      </v-col>

      <v-col cols="12" sm="12">
        <v-data-table
          :headers="headers2"
          :items="articulos"
          hide-default-footer
          class="elevation-1"
        >
          <template v-slot:item.actions="{ item }">
            <v-icon small @click="deactivateItem(item)">
              mdi-delete
            </v-icon>
          </template>
          <template v-slot:no-data>
            <v-btn color="primary" @click="getIngresos">
              Reset
            </v-btn>
          </template>
          <template v-slot:item.status="{ item }">
            <v-chip :color="getColor(item.status)" dark>
              {{ statusName(item.status) }}
            </v-chip>
          </template>
        </v-data-table>
      </v-col>
      <v-col cols="12" sm="4">
        <v-btn @click="changeNewEnter" class="mx-2" dark small color="grey">
          Cancelar
        </v-btn>
        <v-btn class="mx-2" dark small color="green">
          Guardar
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Enters',
  data: () => ({
    search: '',
    dialog: false,
    dialogDelete: false,
    headers: [
      { text: 'Acciones', value: 'actions', sortable: false },
      { text: 'Usuario', value: 'user.name' },
      { text: 'Proveedor', value: 'person.name' },
      { text: 'Fecha', value: 'createdAt' },
      { text: 'Tipo de comprobante', value: 'proofType' },
      { text: 'Serie de comprobante', value: 'proofSeries' },
      { text: 'Número de comprobante', value: 'proofNumber' },
      { text: 'Impuesto', value: 'tax' },
      { text: 'Total', value: 'total' },
      { text: 'Estado', value: 'status', align: 'center' },
    ],
    headers2: [
      { text: 'Borrar', value: 'actions', align: 'center', sortable: false },
      { text: 'Artículo', value: 'name', align: 'center' },
      { text: 'Cantidad', value: 'quantity', align: 'center', sortable: false },
      { text: 'Precio', value: 'price', align: 'center', sortable: false },
      { text: 'SubTotal', value: 'subtotal', align: 'center', sortable: false },
    ],
    articulos: [
      {
        name: 'Articulo 1',
        quantity: 10,
        price: 35,
        subtotal: 40,
      },
      {
        name: 'Articulo 2',
        quantity: 5,
        price: 75,
        subtotal: 90,
      },
    ],
    proveedores: [],
    codigo: '',
    tiposComprobante: ['FACTURA', 'BOLETA'],
    editedIndex: -1,
    defaultItem: {
      name: '',
      description: '',
      status: 0,
    },
    ingresos: [],
    _id: '',
    nombre: '',
    descripcion: '',
    tipoComprobante: '',
    serieComprobante: '',
    numComprobante: '',
    proveedor: '',
    impuesto: '',

    rules: {
      required: value => !!value || 'Campo requerido',
      min: v =>
        (v && v.length >= 1 && v.length <= 53) ||
        'El nombre debe estar entre 1 y 50 caracteres',
    },
    valid: false,
    item: null,
    actionType: null,
    newEnter: false,
    errorCodeMessage: false,
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'Nueva categoría' : 'Editar categoría'
    },
  },

  watch: {
    dialog(val) {
      val || this.close()
    },
    dialogDelete(val) {
      val || this.closeDelete()
    },
  },

  created() {
    this.getIngresos()
    this.getProveedores()
  },

  methods: {
    async getIngresos() {
      try {
        let header = { Token: this.$store.state.token }
        let config = { headers: header }
        const res = await axios.get('enter/list', config)
        this.ingresos = res.data
      } catch (error) {
        console.log(error)
      }
    },
    async getProveedores() {
      try {
        let header = { Token: this.$store.state.token }
        let config = { headers: header }
        const res = await axios.get('person/list', config)
        let arrayPersonas = res.data
        this.proveedores = arrayPersonas.filter(
          x => x.personType === 'Proveedor'
        )
        this.proveedores = this.proveedores.map(x => {
          return {
            value: x._id,
            text: x.name,
          }
        })
      } catch (error) {
        console.log(error)
      }
    },

    async buscarCodigo() {
      try {
        let header = { Token: this.$store.state.token }
        let config = { headers: header }
        const res = await axios.get('article/query?code=' + this.codigo, config)
        console.log(res.data)
        this.errorCodeMessage = false
        // this.articulo = res.data
      } catch (error) {
        console.log(error)
        if (error.response.status === 400) {
          this.errorCodeMessage = true
        }
      }
    },

    statusName(status) {
      if (status === 1) return 'Activo'
      else if (status === 0) return 'Desactivado'
      else return 'Estado desconocido'
    },

    editItem(item) {
      this._id = item._id
      this.nombre = item.name
      this.descripcion = item.description
      this.editedIndex = 1
      this.dialog = true
    },

    deactivateItem(item) {
      this._id = item._id
      this.actionType = 0
      this.dialogDelete = true
    },

    activateItem(item) {
      this._id = item._id
      this.actionType = 1
      this.dialogDelete = true
    },

    async deactivateItemConfirm() {
      try {
        let header = { Token: this.$store.state.token }
        let config = { headers: header }
        await axios.put(
          '/enter/deactivate',
          {
            _id: this._id,
          },
          config
        )
        this.clean()
        this.close()
        this.getIngresos()
      } catch (error) {
        console.log(error)
      }
      this.closeDelete()
    },

    async activateItemConfirm() {
      try {
        let header = { Token: this.$store.state.token }
        let config = { headers: header }
        await axios.put(
          '/enter/activate',
          {
            _id: this._id,
          },
          config
        )
        this.clean()
        this.close()
        this.getIngresos()
      } catch (error) {
        console.log(error)
      }
      this.closeDelete()
    },

    close() {
      this.dialog = false
      this.$refs.form.resetValidation()
      this.$nextTick(() => {
        this.editedIndex = -1
      })
    },

    closeDelete() {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    clean() {
      this._id = ''
      this.nombre = ''
      this.descripcion = ''
    },

    async save() {
      if (this.editedIndex === 1) {
        // se edita
        if (this.$refs.form.validate()) {
          try {
            let header = { Token: this.$store.state.token }
            let config = { headers: header }
            await axios.put(
              '/enter/update',
              {
                _id: this._id,
                name: this.nombre,
                description: this.descripcion,
              },
              config
            )
            this.clean()
            this.close()
            this.getIngresos()
          } catch (error) {
            console.log(error)
          }
          this.close()
        }
      } else {
        // se guarda el nuevo item
        if (this.$refs.form.validate()) {
          try {
            let header = { Token: this.$store.state.token }
            let config = { headers: header }
            await axios.post(
              '/enter/add',
              {
                name: this.nombre,
                description: this.descripcion,
              },
              config
            )
            this.clean()
            this.close()
            this.getIngresos()
          } catch (error) {
            console.log(error)
          }
          this.close()
        }
      }
    },

    getColor(status) {
      if (status === 1) return 'green'
      else if (status === 0) return 'red'
      else return 'black'
    },

    changeNewEnter() {
      this.newEnter = !this.newEnter
    },
  },
}
</script>

<style></style>
