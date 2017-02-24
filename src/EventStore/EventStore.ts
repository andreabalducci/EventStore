interface IEventStore {
    open(id: string): IStream;
}


class EventStore implements IEventStore {
    open(id: string): IStream{
        return new Stream();
    }
}