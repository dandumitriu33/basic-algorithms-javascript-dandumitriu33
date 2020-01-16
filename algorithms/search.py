"""
Implement these two search algorithms.
"""


def linear_search(number, list):
    """
    Search for the number in the sorted list with the linear search algorithm
    and return the index of the element.

    Optional: print out how many comparision was needed to find the number

    :param integer number: The number to search for
    :param list of numbers list: Ascending list of numbers
    :return: Index of the element or None
    :rtype: integer
    """

    index = 0
    for i in list:
        if i == number:
            print('comparisons:', index + 1)
            return index
        index += 1
    return None


def binary_search(number, list):
    """
    Search for the number in the sorted list with the binary search algorithm
    and return the index of the element.

    Optional: print out how many comparision was needed to find the number

    :param integer number: The number to search for
    :param list of numbers list: Ascending list of numbers
    :return: Index of the element or None
    :rtype: integer
    """
    count = 0
    list2 = list[:]
    while len(list) > 1:
        count += 1
        mid = len(list)//2
        index = list2.index(list[mid])
        if list[mid] < number:
            list = list[mid:]
        elif list[mid] > number:
            list = list[:mid]
        else:
            print('comparisons: ', count)
            return index
    if list[0] == number:
        index = list2.index(list[0])
        return index
    else:
        return None


def print_results(search, index):
    result = search.title() + ' search '

    if index is None:
        result += 'did not find it.'
    else:
        result += f'found it on index {index}.'

    print(result)


def main():
    numbers = [3, 6, 8, 11, 18, 23, 24, 33, 36, 45, 46, 51, 56, 60, 69, 72, 83, 90, 93, 97]
    searched_number = int(input('What is the number you are looking for? (0-100) '))

    print_results('linear', linear_search(searched_number, numbers))
    print_results('binary', binary_search(searched_number, numbers))


if __name__ == '__main__':
    main()
