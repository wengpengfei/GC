import Vue from 'vue'
import Element from 'element-ui'
import './reset.scss'
import './common.scss'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'

Vue.prototype.$http = axios
require('../mocks/index')
Vue.use(Element)
