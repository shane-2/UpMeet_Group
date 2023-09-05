using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Up_Meet_Group.Models;

namespace Up_Meet_Group.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FavoriteController : ControllerBase
    {
        UpmeetsDbContext dbContext = new UpmeetsDbContext();

        // api/Favorite/name
        [HttpGet("{name}")]
        public List<Favorite> GetById(string name)
        {
            return dbContext.Favorites.Where(n => n.Username.Contains(name)).ToList();
        }


        // api/Favorite/
        [HttpPost]
        public Favorite AddFavorite([FromBody] Favorite newFav)
        {
            dbContext.Favorites.Add(newFav);
            dbContext.SaveChanges();

            return newFav;
        }


        // api/Favorite/3
        [HttpDelete("{id}")]
        public Favorite DeleteById(int id)
        {
            Favorite deleted = dbContext.Favorites.Find(id);
            dbContext.Favorites.Remove(deleted);
            dbContext.SaveChanges();

            return deleted;
        }
    }
}
