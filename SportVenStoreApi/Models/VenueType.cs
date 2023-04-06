using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace SportVenStoreApi.Models;

public class VenueType
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }

    [BsonElement("name")]
    public string VenueTypeName { get; set; } = null!;

}