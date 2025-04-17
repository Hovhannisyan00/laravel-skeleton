import {DataTable} from "../../../core/DataTable.js";

const options = {
  pathOptions: {
    searchPath: route('dashboard.users.getListData'),
    deletePath: route('dashboard.users.destroy', ':id'),
    editPath: route('dashboard.users.edit', ':id'),
    showPath: route('dashboard.users.show', ':id'),
  },

  relations: {
    roles: 'name',
  },

  actions: {
    show: false,
  },
};

console.log('user/index');
// eslint-disable-next-line no-new,no-undef
new DataTable(options);
