using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Up_Meet_Group.Models;

namespace Up_Meet_Group.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EventController : ControllerBase
    {

        UpmeetsDbContext dbContext = new UpmeetsDbContext();



        //api/Event
        [HttpGet]
        public List<Event> GetAllEvents()
        {
            return dbContext.Events.ToList();
        }



        // api/Event
        [HttpPost]
        public Event AddEvent([FromBody] Event newEvent)
        {
            dbContext.Events.Add(newEvent);
            dbContext.SaveChanges();

            return newEvent;
        }


        // api/Order/3
        [HttpDelete("{id}")]
        public Event DeleteById(int id)
        {
            Event deleted = dbContext.Events.Find(id);
            dbContext.Events.Remove(deleted);
            dbContext.SaveChanges();

            return deleted;
        }


        [HttpGet("{id}")]
        public Event GetById(int id)
        {
           return dbContext.Events.FirstOrDefault(e => e.Id == id);
        }



    }
}
