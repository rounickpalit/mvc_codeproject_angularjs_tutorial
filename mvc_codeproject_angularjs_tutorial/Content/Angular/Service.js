app.service("myService", function ($http) {

    // get All Employee
    this.getEmployees = function () {
        return $http.get("Home/getAll");
    };

    // get Employee By ID
    this.getEmployee = function (employeeID) {
        var response = $http({
            method: "post",
            url: "Home/getEmployeeByNo",
            params: {
                EmpNo: JSON.stringify(employeeID)
            }
        });
        return response;
    }

    // Update Employee
    this.updateEmp = function (employee) {
        var response = $http({
            method: "post",
            url: "Home/UpdateEmployee",
            data: JSON.stringify(employee),
            dataType: "json"
        });
        return response;
    }

    // Add Employee
    this.AddEmp = function (employee) {
        debugger;
        var response = $http({
            method: "post",
            url: "Home/AddEmployee",
            data: JSON.stringify(employee),
            dataType: "json"
        });
        return response;
    }

    // Delete Employee
    this.DeleteEmp = function (employee) {
        var response = $http({
            method: "post",
            url: "Home/DeleteEmployee",
            data: JSON.stringify(employee),
            dataType: "json"
        });
        return response;
    }

})