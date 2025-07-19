export const selectTrucks = state => state.trucks.items;

export const selectTruck = state => state.trucks.itemsId;

export const selectLoading = state => state.trucks.loading;

export const selectError = state => state.trucks.error;

export const selectTotal = state => state.trucks.total;

export const selectPage = state => state.trucks.page;

export const selectSelectedBodyType = state => state.trucks.selectedBodyType;

export const selectLocation = state => state.trucks.location;

export const selectSelectedEquipment = state => state.trucks.selectedEquipment;
