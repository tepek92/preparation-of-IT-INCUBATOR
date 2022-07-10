// Заполнить квадратную матрицу по спирали
// Make a spiral


function spiralize (n) {
    let arr = [];
    for (x = 0; x < n; x++) {
        arr.push([]);
        for (y = 0; y < n; y++) {
            arr[x].push(0);
        } 
    }

    let i = 0, j = 0, k = 0, v = 0;

    while (v < n) {
        i = k;
        for(;j < n - k; j++) {
            arr[i][j] = 1;
        };
        v++;

        j = n - k - 1;
        for(;i < n - k; i++) {
            arr[i][j] = 1;
        };
        v++;

        i = n - k - 1;
        for(j = n - k - 1; j > k; j--) {
            arr[i][j] = 1;
        };
        v++;

        j = k;
        for(i = n - k - 1; i > k + 1; i--) {
            arr[i][j] = 1;
        };
        v++;
        k += 2;
    }
  return arr;
  }
