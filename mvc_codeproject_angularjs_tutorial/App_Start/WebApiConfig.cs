using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace mvc_codeproject_angularjs_tutorial
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
        }
    }
}
