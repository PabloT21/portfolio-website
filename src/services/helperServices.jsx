export default class HelperServices {
    static getYearsUntilNow(initialYear, initialMonth) {
      let date = new Date()
      let currentYear = date.getFullYear()
      let currentMonth = date.getMonth() + 1 
      let years = currentYear - initialYear
      
      if (initialMonth > currentMonth) {
        years--
      }
      
      return years
    }
  }