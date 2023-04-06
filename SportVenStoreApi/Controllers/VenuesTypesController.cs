using SportVenStoreApi.Models;
using SportVenStoreApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace SportVenStoreApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class VenuesTypesController : ControllerBase
{
    private readonly VenuesTypesService _venuestypesService;

    public VenuesTypesController(VenuesTypesService venuestypesService) =>
        _venuestypesService = venuestypesService;

    [HttpGet]
    public async Task<List<VenueType>> Get() =>
        await _venuestypesService.GetAsync();

    [HttpGet("{id:length(24)}")]
    public async Task<ActionResult<VenueType>> Get(string id)
    {
        var venuetype = await _venuestypesService.GetAsync(id);

        if (venuetype is null)
        {
            return NotFound();
        }

        return venuetype;
    }

    [HttpPost]
    public async Task<IActionResult> Post(VenueType newVenueType)
    {
        await _venuestypesService.CreateAsync(newVenueType);

        return CreatedAtAction(nameof(Get), new { id = newVenueType.Id }, newVenueType);
    }

    [HttpPut("{id:length(24)}")]
    public async Task<IActionResult> Update(string id, VenueType updatedVenueType)
    {
        var venuetype = await _venuestypesService.GetAsync(id);

        if (venuetype is null)
        {
            return NotFound();
        }

        updatedVenueType.Id = venuetype.Id;

        await _venuestypesService.UpdateAsync(id, updatedVenueType);

        return NoContent();
    }

    [HttpDelete("{id:length(24)}")]
    public async Task<IActionResult> Delete(string id)
    {
        var venuetype = await _venuestypesService.GetAsync(id);

        if (venuetype is null)
        {
            return NotFound();
        }

        await _venuestypesService.RemoveAsync(id);

        return NoContent();
    }
}