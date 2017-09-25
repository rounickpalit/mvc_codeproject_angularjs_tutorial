using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace mvc_codeproject_angularjs_tutorial.Controllers
{
    public class HomeController : Controller
    {
        //
        // GET: /Home/

        public ActionResult Index()
        {
            return View();
        }

        public JsonResult getAll()
        {
            using (EMPDatabaseEntities dataContext = new EMPDatabaseEntities())
            {
                var employeeList = dataContext.Employees.ToList();
                return Json(employeeList, JsonRequestBehavior.AllowGet);
            }
        }

        public JsonResult getEmployeeByNo(string EmpNo)
        {
            using (EMPDatabaseEntities dataContext = new EMPDatabaseEntities())
            {
                int no = Convert.ToInt32(EmpNo);
                var employeeList = dataContext.Employees.Find(no);
                return Json(employeeList, JsonRequestBehavior.AllowGet);
            }
        }

        public string UpdateEmployee(Employee emp)
        {
            if (emp != null)
            {
                using (EMPDatabaseEntities dataContext = new EMPDatabaseEntities())
                {
                    int no = Convert.ToInt32(emp.Id);
                    var employeeList = dataContext.Employees.Where(x => x.Id == no).FirstOrDefault();
                    employeeList.name = emp.name;
                    employeeList.mobile_no = emp.mobile_no;
                    employeeList.email = emp.email;
                    dataContext.SaveChanges();
                    return "Employee Updated";
                }
            }
            else
            {
                return "Invalid Employee";
            }
        }

        public string AddEmployee(Employee Emp)
        {
            if (Emp != null)
            {
                using (EMPDatabaseEntities dataContext = new EMPDatabaseEntities())
                {
                    dataContext.Employees.Add(Emp);
                    dataContext.SaveChanges();
                    return "Employee Updated";
                }
            }
            else
            {
                return "Invalid Employee";
            }
        }

        public string DeleteEmployee(Employee emp)
        {
            if (emp != null)
            {
                using (EMPDatabaseEntities dataContext = new EMPDatabaseEntities())
                {
                    int no = Convert.ToInt32(emp.Id);
                    var employeeList = dataContext.Employees.Where(x => x.Id == no).FirstOrDefault();
                    dataContext.Employees.Remove(employeeList);
                    dataContext.SaveChanges();
                    return "Employee Deleted";
                }
            }
            else
            {
                return "Invalid Employee";
            }
        }

    }
}
