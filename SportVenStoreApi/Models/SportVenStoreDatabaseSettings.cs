namespace SportVenStoreApi.Models;

public class SportVenStoreDatabaseSettings
{
    public string ConnectionString { get; set; } = null!;

    public string DatabaseName { get; set; } = null!;

    public string VenuesTypesCollectionName { get; set; } = null!;

    public string CountriesCollectionName { get; set; } = null!;
}