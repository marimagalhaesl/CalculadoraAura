({
    getResults : function(component, option) {
        var a = component.get("v.number1");
        var b = component.get("v.number2");
        
        if(option === 'add') {
            if(isNaN(a) || isNaN(b) || (a == null) || (b == null)) {
                alert("Por favor, digite números válidos para os dois campos");
            } else {
                return parseFloat(a) + parseFloat(b);  
            }
        }
        if(option === 'sub') {
            if(isNaN(a) || isNaN(b) || (a == null) || (b == null)) {
                alert("Por favor, digite números válidos para os dois campos");
            } else {
                return parseFloat(a) - parseFloat(b);
            }
        }
        if(option === 'mult') {
            if(isNaN(a) || isNaN(b) || (a == null) || (b == null)) {
                alert("Por favor, digite números válidos para os dois campos");
            } else {
                return parseFloat(a) * parseFloat(b);
            }
        }
        if(option === 'div') {
            if(isNaN(a) || isNaN(b) || (a == null) || (b == null)) {
                alert("Por favor, digite números válidos para os dois campos");
            } else if(parseFloat(b) === 0) {
                alert("Não é possível realizar a divisão por zero");
            } else {
                return parseFloat(a) / parseFloat(b);              
            }
        }
        
        if(option === 'clear'){
            component.set("v.number1", 0);
            component.set("v.number2", 0);
        }
    },
    
    setResults : function(component, result) {
        component.set("v.output", result);    
    }
})  

/*add : function(component, event, helper) {
        var a = component.get("v.number1");
        var b = component.get("v.number2");
        var total = parseInt(a) + parseInt(b);
        component.set("v.output", total);
    },
    
    sub : function(component, event, helper) {
        var a = component.get("v.number1");
        var b = component.get("v.number2");
        var total = parseInt(a) - parseInt(b);
        component.set("v.output", total);
    },
    
    mult : function(component, event, helper) {
        var a = component.get("v.number1");
        var b = component.get("v.number2");
        var total = parseInt(a) * parseInt(b);
        component.set("v.output", total);
    },
    
    div : function(component, event, helper) {
        var a = component.get("v.number1");
        var b = component.get("v.number2");
        var total = parseInt(a) / parseInt(b);
        component.set("v.output", total);
    },
    
    clear : function(component, event, helper) {
        component.set("v.output",0);
        component.set("v.number1",0);
        component.set("v.number2",0);
    }*/
