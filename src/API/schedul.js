export const schedule = [
    {
        profileId: '101',
        classType : {
            type: "joint",
            price : 200,
            timing: {
                morningTime: ['05:00 AM - 6:00 AM', '06:00 AM - 07:00 AM', '07:00 AM - 08:00 AM'],
                morningTime: ['06:00 AM - 07:00 AM', '07:00 AM - 08:00 AM', '08:00 AM - 9:00 AM']
            },
            batches : [
                {
                    batchId: '1',
                    dateRange: 'June 1 - June 7'
                }
            ]
        }
      
    },  


]


timing: {
    morningTime: ['05:00 AM - 6:00 AM', '06:00 AM - 07:00 AM', '07:00 AM - 08:00 AM'],
    morningTime: ['06:00 AM - 07:00 AM', '07:00 AM - 08:00 AM', '08:00 AM - 9:00 AM']
},
pricing: 200,
batches: [
    {
        batchId: '1',
        batchType: 'Joint',
        dateRange: 'June 1 - June 7',
    }
]