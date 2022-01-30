import axios from 'axios'

export default axios.create({
    baseURL: "https://api.unsplash.com/",
    headers: {
        Authorization:
          'Client-ID XHe-piJ4pwjegi7vxJW-RJQTxOi3oj9qFrFFwe5Hs0M',
    },

})

