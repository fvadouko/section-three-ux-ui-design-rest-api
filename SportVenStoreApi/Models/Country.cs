using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace SportVenStoreApi.Models;

public class Country
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }

    [BsonElement("name")]
    public string CountryName { get; set; } = null!;

    [BsonElement("code")]
    public string CountryCode { get; set; } = null!;

}