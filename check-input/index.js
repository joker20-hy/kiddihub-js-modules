/**
 * @author joker20
 * @param {Element} element
 * @description //# tag name 'check-input'
 */
var __CheckInput__ = function(element) {
  var self = element
  element.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352.62 352.62">
  <path d="M337.222,22.952c-15.912-8.568-33.66,7.956-44.064,17.748c-23.867,23.256-44.063,50.184-66.708,74.664
  c-25.092,26.928-48.348,53.856-74.052,80.173c-14.688,14.688-30.6,30.6-40.392,48.96c-22.032-21.421-41.004-44.677-65.484-63.648
  c-17.748-13.464-47.124-23.256-46.512,9.18c1.224,42.229,38.556,87.517,66.096,116.28c11.628,12.24,26.928,25.092,44.676,25.704
  c21.42,1.224,43.452-24.48,56.304-38.556c22.645-24.48,41.005-52.021,61.812-77.112c26.928-33.048,54.468-65.485,80.784-99.145
  C326.206,96.392,378.226,44.983,337.222,22.952z M26.937,187.581c-0.612,0-1.224,0-2.448,0.611
  c-2.448-0.611-4.284-1.224-6.732-2.448l0,0C19.593,184.52,22.653,185.132,26.937,187.581z"/>
  </svg>`
  // 
  self.__defineGetter__('nodeName', function () {
    return 'INPUT'
  })
  self.__defineGetter__('type', function () {
    return 'checkbox'
  })
  self.__defineGetter__('name', function () {
    return self.getAttribute('name')
  })
  self.__defineGetter__('checked', function () {
    return self.hasAttribute('checked')
  })
  self.__defineSetter__('checked', function (val) {
    val?self.setAttribute('checked', ''):self.removeAttribute('checked')
  })
  self.__defineGetter__('value', function () {
    return self.getAttribute('value')
  })
  self.__defineSetter__('value', function (val) {
    self.setAttribute('value', val)
  })
  self.addEventListener('click', function() {
    self.checked = !self.checked
    self.dispatchEvent(new Event('input'))
  })
  this.on = function(event, listener) {
    self.addEventListener(event, listener)
  }
}
export default __CheckInput__