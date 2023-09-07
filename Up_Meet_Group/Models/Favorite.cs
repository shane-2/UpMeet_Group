using System;
using System.Collections.Generic;

namespace Up_Meet_Group.Models;

public partial class Favorite
{
    public int Id { get; set; }

    public string? Username { get; set; }

    public int? EventId { get; set; }

    public virtual Event? Event { get; set; }
    
}
