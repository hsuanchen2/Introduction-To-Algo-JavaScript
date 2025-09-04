#include <iostream>

void insertionSort(int arr[], int n)
{
    for (int i = 0; i < n; i++)
    {
        const double currentValue = arr[i];
        int j = i - 1;
        while (arr[j] > currentValue & j >= 0)
        {
            arr[j+1] = arr[j]; 
            j--; 
        }
        arr[j+1] = current
    }
}
int main()
{
    int arr[] = {5, 2, 4, 6, 1, 3};
     int n = sizeof(arr) / sizeof(arr[0]);
    insertionSort(arr, n)
    return 0
}