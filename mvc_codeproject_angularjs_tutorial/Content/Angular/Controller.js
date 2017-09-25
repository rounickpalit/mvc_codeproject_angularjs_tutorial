app.controller("myCntrl", function ($scope, myService) {

    $scope.divEmployee = false;

    var onError = function () {
        alert('Error in getting records');
        console.log('Error in getting records');
    }

    function GetAllEmployee() {
        var getData = myService.getEmployees();
        getData.then(function (emp) {
            $scope.employees = emp.data;
        }, function () {
            alert('Error in getting records');
            console.log('Error in getting records');
        });
    };

    $scope.editEmployee = function (employee) {
        var getData = myService.getEmployee(employee.Id);
        getData.then(function (emp) {
            $scope.employee = emp.data;
            $scope.employeeId = employee.Id;
            $scope.employeeName = employee.name;
            $scope.employeeEmail = employee.email;
            $scope.employeeMobile = employee.mobile_no;
            $scope.Action = "Update";
            $scope.divEmployee = true;
        }, function () {
            alert('Error in editing records');
            console.log('Error in editing records');
        });
    }

    $scope.AddUpdateEmployee = function () {
        debugger;
        var Employee = {
            Id: $scope.employeeId,
            Name: $scope.employeeName,
            Email: $scope.employeeEmail,
            Mobile_no: $scope.employeeMobile
        };
        var getAction = $scope.Action;

        if (getAction == "Update") {
            Employee.Id = $scope.employeeId;
            var getData = myService.updateEmp(Employee);
            getData.then(function (msg) {
                GetAllEmployee();
                alert(msg.data);
                $scope.divEmployee = false;
            }, function () {
                alert('Error in updating record');
            });
        }
        else {
            var getData = myService.AddEmp(Employee);
            getData.then(function (msg) {
                GetAllEmployee();
                alert(msg.data);
                $scope.divEmployee = false;
            }, function () {
                alert('Error in adding record');
            });
        }
    }

    $scope.AddEmployeeDiv = function () {
        ClearFields();
        $scope.Action = "Add";
        $scope.divEmployee = true;
    }

    $scope.deleteEmployee = function (employee) {
        var getData = myService.DeleteEmp(employee);
        getData.then(function (msg) {
            GetAllEmployee();
            alert('Employee Deleted');
        }, function () {
            alert('Error in Deleting Record');
        });
    }

    function ClearFields() {
        $scope.employeeId = "";
        $scope.employeeName = "";
        $scope.employeeEmail = "";
        $scope.employeeMobile = "";
    }

    GetAllEmployee();

});