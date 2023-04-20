({
    add : function(component, event, helper) {
        var result = helper.getResults(component, 'add');
        helper.setResults(component, result);
    },
    
    sub : function(component, event, helper) {
        var result = helper.getResults(component, 'sub');
        helper.setResults(component, result);
    },
    
    mult : function(component, event, helper) {
        var result = helper.getResults(component, 'mult');
        helper.setResults(component, result);
    },
    
    div : function(component, event, helper) {
        var result = helper.getResults(component, 'div');
        helper.setResults(component, result);
    },
    
    clear : function(component, event, helper) {
        var result = helper.getResults(component, 'clear');
        helper.setResults(component, result);
    }
})
