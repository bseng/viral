$("#date").pickadate({
  container: "#body"
});
$("#time").pickatime({
  disable: [
    true,
    [12,0],
    [12,30],
    [13,0],
    [13,30],
    [14,0],
    [14,30],
    [18,30],
    [19,0],
    [19,30],
    [20,0],
    [20,30],
    [21,0],
    [21,30]
  ],
  container: "#body"
});

