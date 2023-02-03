import { ClassesStore } from "@stores/ClassesStore";
import { UserStore } from "@stores/UserStore";
import { createContext, useContext } from "react";
import { AsyncTrunk } from "mobx-sync";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RoomStore } from "@stores/RoomStore";
import { ServicesStore } from "@stores/ServicesStore";
import { ConsultantsStore } from "@stores/ConsultantsStore";
import { ProfileStore } from "@stores/ProfileStore";
export class RootStore {
  classes;
  user;
  rooms;
  services;
  consultants;
  profiles;

  constructor() {
    this.classes = new ClassesStore();
    this.user = new UserStore();
    this.rooms = new RoomStore();
    this.services = new ServicesStore();
    this.consultants = new ConsultantsStore();
    this.profiles = new ProfileStore();
  }
}

export const rootStore = new RootStore();

export const trunk = new AsyncTrunk(rootStore, {
  storage: AsyncStorage,
});

export const StoreContext = createContext(rootStore);
export const StoreProvider = StoreContext.Provider;
export const useStore = () => useContext(StoreContext);
