import { fetchCollection } from '~/services/fetch.js'

interface Currency {
  symbol: string
  name: string
  name_plural: string
  code: string
}

type State = {
  currentCurrency: Currency | null
  currencies: Currency[]
}

export const useCurrencyStore = defineStore('CurrencyStore', {
  state: (): State => {
    return {
      currentCurrency: null,
      currencies: []
    }
  },
  actions: {
    async fetchAll () {
      const currencies = await fetchCollection<Currency>('currencies')
      if (currencies) {
        this.currencies = [...currencies]
      }
    },
    setCurrent (currency: Currency) {
      this.currentCurrency = { ...currency }
    }
  }
})
