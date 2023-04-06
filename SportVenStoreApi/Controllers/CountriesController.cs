using SportVenStoreApi.Models;
using SportVenStoreApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace SportVenStoreApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CountriesController : ControllerBase
{
    private readonly CountriesService _countriesService;

    public CountriesController(CountriesService countriesService) =>
        _countriesService = countriesService;

    [HttpGet]
    public async Task<List<Country>> Get() =>
        await _countriesService.GetAsync();

    [HttpGet("{id:length(24)}")]
    public async Task<ActionResult<Country>> Get(string id)
    {
        var venuetype = await _countriesService.GetAsync(id);

        if (venuetype is null)
        {
            return NotFound();
        }

        return venuetype;
    }

    [HttpPost]
    public async Task<IActionResult> Post(Country newCountry)
    {
        await _countriesService.CreateAsync(newCountry);

        return CreatedAtAction(nameof(Get), new { id = newCountry.Id }, newCountry);
    }

    [HttpPut("{id:length(24)}")]
    public async Task<IActionResult> Update(string id, Country updatedCountry)
    {
        var venuetype = await _countriesService.GetAsync(id);

        if (venuetype is null)
        {
            return NotFound();
        }

        updatedCountry.Id = venuetype.Id;

        await _countriesService.UpdateAsync(id, updatedCountry);

        return NoContent();
    }

    [HttpDelete("{id:length(24)}")]
    public async Task<IActionResult> Delete(string id)
    {
        var venuetype = await _countriesService.GetAsync(id);

        if (venuetype is null)
        {
            return NotFound();
        }

        await _countriesService.RemoveAsync(id);

        return NoContent();
    }
}