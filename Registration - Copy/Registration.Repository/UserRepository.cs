using Registration.Data;
using Registration.Data.Model;
using Registration.Repository.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Registration.Repository
{
   public class UserRepository : IUserRepository
    {
        private readonly ApplicationDbContext dbcontext;
        public UserRepository(ApplicationDbContext context) 
        {
            dbcontext = context;
        }
        public List<User> GetUsers()
        {
         return dbcontext.Users.ToList();
           
        }
    }
}
