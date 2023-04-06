using SportVenStoreApi.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace SportVenStoreApi.Services;

public class VenuesTypesService
{
    private readonly IMongoCollection<VenueType> _venuestypesCollection;

    public VenuesTypesService(
        IOptions<SportVenStoreDatabaseSettings> sportvenStoreDatabaseSettings)
    {
        var mongoClient = new MongoClient(
            sportvenStoreDatabaseSettings.Value.ConnectionString);

        var mongoDatabase = mongoClient.GetDatabase(
            sportvenStoreDatabaseSettings.Value.DatabaseName);

        _venuestypesCollection = mongoDatabase.GetCollection<VenueType>(
            sportvenStoreDatabaseSettings.Value.VenuesTypesCollectionName);
    }

    public async Task<List<VenueType>> GetAsync() =>
        await _venuestypesCollection.Find(_ => true).ToListAsync();

    public async Task<VenueType?> GetAsync(string id) =>
        await _venuestypesCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

    public async Task CreateAsync(VenueType newVenueType) =>
        await _venuestypesCollection.InsertOneAsync(newVenueType);

    public async Task UpdateAsync(string id, VenueType updatedVenueType) =>
        await _venuestypesCollection.ReplaceOneAsync(x => x.Id == id, updatedVenueType);

    public async Task RemoveAsync(string id) =>
        await _venuestypesCollection.DeleteOneAsync(x => x.Id == id);
}