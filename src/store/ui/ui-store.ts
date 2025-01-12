interface State {
    isProductsDropdownOpen: boolean,
    isSideMenuOpen : boolean,
    openSideMenu : () => void,
    closeSideMenu: () => void,
    toggleProductsDropdown: () => void,
}

import { create } from 'zustand'

export const useUIStore = create<State>()((set) => ({
  isSideMenuOpen: false,
  isProductsDropdownOpen: false,
  openSideMenu: () => set({isSideMenuOpen: true}),
  closeSideMenu: () => set({isSideMenuOpen: false }),
  toggleProductsDropdown: () => set((state) => ({isProductsDropdownOpen: !state.isProductsDropdownOpen}))

}))
