using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Registration.Models
{
    /// <summary>
    /// Set the http response with result and message,For success status  value is true by default
    /// </summary> 
    public class ResponseResult
    {
        public bool Status { get; set; }
        public object Value { get; set; }
        public string Message { get; set; }
        public int Count { get; set; }
        //default true 
        public ResponseResult()
        {
            this.Status = true;
        }
    }
}
