export const actions = {
    async getLocations(context, type) {
        let res = await this.$axios.get('/api/locations?type=' + type)
        return res;
    }
  }