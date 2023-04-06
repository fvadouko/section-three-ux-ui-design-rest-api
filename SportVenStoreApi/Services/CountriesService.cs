using SportVenStoreApi.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace SportVenStoreApi.Services;

public class CountriesService
{
    private readonly IMongoCollection<Country> _countriesCollection;

    public CountriesService(
        IOptions<SportVenStoreDatabaseSettings> sportvenStoreDatabaseSettings)
    {
        var mongoClient = new MongoClient(
            sportvenStoreDatabaseSettings.Value.ConnectionString);

        var mongoDatabase = mongoClient.GetDatabase(
            sportvenStoreDatabaseSettings.Value.DatabaseName);

        _countriesCollection = mongoDatabase.GetCollection<Country>(
            sportvenStoreDatabaseSettings.Value.CountriesCollectionName);
    }

    public async Task<List<Country>> GetAsync() =>
        await _countriesCollection.Find(_ => true).ToListAsync();

    public async Task<Country?> GetAsync(string id) =>
        await _countriesCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

    public async Task CreateAsync(Country newCountry) =>
        await _countriesCollection.InsertOneAsync(newCountry);

    public async Task UpdateAsync(string id, Country updatedCountry) =>
        await _countriesCollection.ReplaceOneAsync(x => x.Id == id, updatedCountry);

    public async Task RemoveAsync(string id) =>
        await _countriesCollection.DeleteOneAsync(x => x.Id == id);
}