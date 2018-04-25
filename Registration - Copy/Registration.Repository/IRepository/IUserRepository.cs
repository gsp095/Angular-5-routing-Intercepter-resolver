using Registration.Data.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace Registration.Repository.IRepository
{
   public interface IUserRepository
    {
         List<User> GetUsers();
       
    }
}
