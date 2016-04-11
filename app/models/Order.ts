export class Order{
    constructor(
    public id: number,
    public OrderNumber: number,
    public OrderType: string,
    public LineNumber: number,
    public PartNumber: string,
    public PartDescription: string,
    public ReceivedDate: Date,
    public Category: string  
    ){}
}