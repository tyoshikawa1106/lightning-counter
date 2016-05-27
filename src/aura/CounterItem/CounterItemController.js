({
  countup : function(component, event, helper) {
    var countNum = component.get("v.countNum");
    component.set("v.countNum",countNum + 1);
  },
  countdown : function(component, event, helper) {
    var countNum = component.get("v.countNum");
    component.set("v.countNum",countNum - 1);
  }
})