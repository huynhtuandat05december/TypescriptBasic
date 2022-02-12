enum ResourceType {
  BOOK, // index 0
  AUTHOR,
  FILM,
  PERSON,
}

interface ResourceEnum<T> {
  uid: number;
  type: ResourceType;
  data: T;
}

const docOne16: ResourceEnum<object> = {
  uid: 1,
  type: ResourceType.BOOK, // when console.log(), will print 0
  data: { name: 'game of thrones' },
};

const docTwo17: ResourceEnum<object> = {
  uid: 2,
  type: ResourceType.PERSON,
  data: { name: 'yoshi' },
};
