using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Mvc;

namespace WebApplication.PublicApiControllers
{
    public class UserInfortest
    {
        public string UserName { get; set; }
        public int UserId { get; set; }
    }

    [System.Web.Http.RoutePrefix("api/Users")]
    public class UsersController : ApiController
    {
        // GET: api/Users
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        [System.Web.Http.Route("GetUserById")]
        public UserInfortest GetUserById(int id)
        {
            return new UserInfortest
            {
                UserId = 100,
                UserName = "TestUser"
            };
        }
    }
}
