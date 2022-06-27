using AngularASP1.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularASP1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClientsController : ControllerBase
    {
        private readonly Context context;

        public ClientsController(Context _context)
        {
            context = _context;
        }

        [HttpGet]
        public IActionResult GetClients()
        {
            return Ok(context.Clients);
        }

        [HttpPost]
        public IActionResult CreateClient([FromBody] Client client)
        {
            context.Clients.Add(client);
            context.SaveChanges();
            return Ok(client);
        }
    }
}
