class SortAlgo
{
    void sortArr(int arr[])
    {
        int x = arr.length;
        for (int i = 0; i < x-1; i++)
            for (int n = 0; n < x-i-1; n++)
                if (arr[n] > arr[n+1])
                {
                    int temp = arr[n];
                    arr[n] = arr[n+1];
                    arr[n+1] = temp;
                }
    }

    // Print array
    void printArray(int arr[])
    {
        int x = arr.length;
        for (int i=0; i<x; ++i)
            System.out.print(arr[i] + " ");
        System.out.println();
    }

    // Test sort algorithm
    public static void main(String args[])
    {
        SortAlgo ob = new SortAlgo();
        int arr[] = {20, 45, 12, 18, 65, 8, 87};
        ob.sortArr(arr);
        System.out.println("Sorted array list");
        ob.printArray(arr);
    }
}