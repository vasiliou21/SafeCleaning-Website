const photo = (file, alt, height, width = 1120) => ({
  src: `/images/projects/${file}-${width}.webp`,
  srcset: `/images/projects/${file}-640.webp 640w, /images/projects/${file}-${width}.webp ${width}w`,
  alt,
  width,
  height,
});

export const projectPhotos = {
  staircase: photo('staircase', 'Εσωτερικό κλιμακοστάσιο με μεταλλικά κιγκλιδώματα', 840),
  building: photo('open-building-interior', 'Ευρύς εσωτερικός χώρος με κολόνες και κλιμακοστάσιο', 840),
  commercial: photo('commercial-interior', 'Εσωτερικός χώρος με γυάλινα χωρίσματα και δάπεδο από πλακάκι', 1493),
  partitions: photo('glass-partitions', 'Γυάλινα χωρίσματα σε εσωτερικό χώρο', 1488),
  kitchen: photo('kitchen', 'Κουζίνα με ξύλινη επένδυση και νησίδα', 1493),
  bathroom: photo('bathroom', 'Μπάνιο με γυάλινη καμπίνα ντους', 1493),
  room: photo('empty-room', 'Ενιαίος χώρος με ανοιχτόχρωμο δάπεδο', 1493),
  team: photo('why-team-logo', 'Στολή SafeCleaning με το λογότυπο στην πλάτη και εξοπλισμός καθαρισμού', 1536, 1024),
};
