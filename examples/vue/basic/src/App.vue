<script setup lang="ts">
import {
  createTable,
  getCoreRowModel,
  useTableInstance,
} from '@tanstack/vue-table'
import { h, ref } from 'vue'

type Person = {
  firstName: string
  lastName: string
  age: number
  visits: number
  status: string
  progress: number
}

const table = createTable().setRowType<Person>()

const defaultData: Person[] = [
  {
    firstName: 'tanner',
    lastName: 'linsley',
    age: 24,
    visits: 100,
    status: 'In Relationship',
    progress: 50,
  },
  {
    firstName: 'tandy',
    lastName: 'miller',
    age: 40,
    visits: 40,
    status: 'Single',
    progress: 80,
  },
  {
    firstName: 'joe',
    lastName: 'dirte',
    age: 45,
    visits: 20,
    status: 'Complicated',
    progress: 10,
  },
  {
    firstName: 'brahim',
    lastName: 'boussadjra',
    age: 31,
    visits: 42,
    status: 'married',
    progress: 36,
  },
]

const defaultColumns = [
  table.createGroup({
    header: 'Name',
    footer: props => props.column.id,
    columns: [
      table.createDataColumn('firstName', {
        cell: info => h('b', info.getValue()),
        header: 'First Name',
        footer: props => props.column.id,
      }),
      table.createDataColumn('lastName', {
        id: 'lastName',
        cell: info => info.getValue(),
        header: 'Last Name',
        footer: props => props.column.id,
      }),
    ],
  }),
  table.createGroup({
    header: 'Info',
    footer: props => props.column.id,
    columns: [
      table.createDataColumn('age', {
        header: 'Age',
        footer: props => props.column.id,
      }),
      table.createGroup({
        header: 'More Info',
        columns: [
          table.createDataColumn('visits', {
            header: 'Visits',
            footer: props => props.column.id,
          }),
          table.createDataColumn('status', {
            header: 'Status',
            footer: props => props.column.id,
          }),
          table.createDataColumn('progress', {
            header: 'Profile Progress',
            footer: props => props.column.id,
          }),
        ],
      }),
    ],
  }),
]

const data = ref(defaultData)
const columns = ref<typeof defaultColumns>(defaultColumns)

const instance = useTableInstance(table, {
  data: data.value,
  columns: columns.value,
  getCoreRowModel: getCoreRowModel(),
})
</script>

<template>
  <div class="p-2">
    <table>
      <thead>
        <tr
          v-for="headerGroup in instance.getHeaderGroups()"
          :key="headerGroup.id"
        >
          <th
            v-for="header in headerGroup.headers"
            :key="header.id"
            :colspan="header.colSpan"
          >
            <template v-if="!header.isPlaceholder">
              {{ header.column.header }}
            </template>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in instance.getRowModel().rows" :key="row.id">
          <td v-for="(cell, i) in row.getVisibleCells()" :key="cell.id">
            <component :is="cell.renderCell()" />
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr
          v-for="footerGroup in instance.getFooterGroups()"
          :key="footerGroup.id"
        >
          <th
            v-for="header in footerGroup.headers"
            :key="header.id"
            :colspan="header.colSpan"
          >
            <template v-if="!header.isPlaceholder">
              {{ header.column.header }}
            </template>
          </th>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<style>
@import './assets/base.css';

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }
}

.p-2 {
  padding: 0.5rem;
}

table {
  border: 1px solid lightgray;
}

tbody {
  border-bottom: 1px solid lightgray;
}

th {
  border-bottom: 1px solid lightgray;
  border-right: 1px solid lightgray;
  padding: 2px 4px;
}

tfoot {
  color: gray;
}

tfoot th {
  font-weight: normal;
}
</style>
