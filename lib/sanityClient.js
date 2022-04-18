import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId: 'un8owter',
    dataset: 'production',
    apiVersion: '2021-03-25',
    token:
        'skEwBW2BiFuVWVmcyr7s9P6fefgoYCwH5BE675jk0NV5l9oKfcQMV4xmOPUOOkRXWiOpNFcCoYLb6KSH5mvlwa5W5rfhl9wqSJHzUnywBLb2naoErYd5wktO8YZaDsAzfPBWTtWQQHnECJjMPHJOWwiNWWLjK31ZfAsOuBthE3bU4kuruuPm',
    useCdn: false,
})