const panoramas = {
  salvador: { location: '-12.9721,-38.5108', label: 'Pelourinho' },
  kyoto: { location: '35.0033,135.7788', label: 'Gion' },
  paris: { location: '48.8578,2.2952', label: 'Torre Eiffel' },
  roma: { location: '41.9008,12.4834', label: 'Centro histórico' },
  londres: { location: '51.5055,-0.0754', label: 'Tower Bridge' },
  'nova-york': { location: '40.7580,-73.9855', label: 'Times Square' },
  lisboa: { location: '38.7079,-9.1366', label: 'Praça do Comércio' },
  amsterda: { location: '52.3666,4.8896', label: 'Canais de Amsterdã' },
  praga: { location: '50.0865,14.4114', label: 'Ponte Carlos' },
  'buenos-aires': { location: '-34.6081,-58.3710', label: 'Plaza de Mayo' },
  'rio-de-janeiro': { location: '-22.9850,-43.1986', label: 'Orla de Ipanema' },
  porto: { location: '41.1400,-8.6115', label: 'Ribeira do Porto' },
  barcelona: { location: '41.3851,2.1697', label: 'Centro de Barcelona' },
  'sao-francisco': { location: '37.8077,-122.4750', label: 'Golden Gate' },
  'cidade-do-mexico': { location: '19.4326,-99.1332', label: 'Zócalo' },
};

export function destinationLinks(destination) {
  const place = `${destination.name}, ${destination.country}`;
  const focus = `${destination.highlights?.[0] || destination.name}, ${destination.country}`;
  const viewpoint = panoramas[destination.id];
  const maps = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(focus)}`;
  const street = viewpoint
    ? `https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=${encodeURIComponent(viewpoint.location)}`
    : maps;
  const earth = `https://earth.google.com/web/search/${encodeURIComponent(place)}`;
  return { street, earth, maps, isPanorama: Boolean(viewpoint), point: viewpoint?.label || destination.highlights?.[0] || destination.name };
}
