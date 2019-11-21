
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {
          activity_id: 1, activity_name: 'washing',
          snow: false,
          sleet: false,
          hail: false,
          thunder: false,
          heavy_rain: false,
          light_rain: false,
          showers: false,
          heavy_cloud: true,
          light_cloud: true,
          clear: true
        },
        {
          activity_id: 2, activity_name: 'mountain_biking',
          snow: false,
          sleet: false,
          hail: false,
          thunder: false,
          heavy_rain: false,
          light_rain: false,
          showers: false,
          heavy_cloud: true,
          light_cloud: true,
          clear: true
        },
        {
          activity_id: 3, activity_name: 'raving',
          snow: true,
          sleet: true,
          hail: true,
          thunder: true,
          heavy_rain: true,
          light_rain: true,
          showers: true,
          heavy_cloud: true,
          light_cloud: true,
          clear: true
        },
        {
          activity_id: 4, activity_name: 'indoor_activities',
          snow: true,
          sleet: true,
          hail: true,
          thunder: true,
          heavy_rain: true,
          light_rain: true,
          showers: true,
          heavy_cloud: true,
          light_cloud: true,
          clear: false
        },
        {
          activity_id: 5, activity_name: 'wind_surfing',
          snow: false,
          sleet: false,
          hail: false,
          thunder: false,
          heavy_rain: false,
          light_rain: true,
          showers: true,
          heavy_cloud: true,
          light_cloud: true,
          clear: true
        },
        {
          activity_id: 6, activity_name: 'beach_day',
          snow: false,
          sleet: false,
          hail: false,
          thunder: false,
          heavy_rain: false,
          light_rain: false,
          showers: false,
          heavy_cloud: false,
          light_cloud: true,
          clear: true
        },
        {
          activity_id: 7, activity_name: 'stargazing',
          snow: false,
          sleet: false,
          hail: false,
          thunder: false,
          heavy_rain: false,
          light_rain: false,
          showers: false,
          heavy_cloud: false,
          light_cloud: false,
          clear: true
        },
      ]);
    });
};
