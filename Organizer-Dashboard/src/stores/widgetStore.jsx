import { create } from 'zustand'
import Todo from '../components/widget/TodoList/TodoList'

const useWidgetStore = create((set) => ({
  widgets: [],
  addWidget: (toAdd) => set((state) => ({ widgets: [...state.widgets, toAdd] })),
}))

export default useWidgetStore