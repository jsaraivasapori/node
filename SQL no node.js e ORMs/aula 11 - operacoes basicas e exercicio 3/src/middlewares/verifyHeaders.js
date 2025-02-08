class HanddleHeaders {
  constructor() {
    this.userId = null;
    this.postId = null;
  }

  handdlle(req, res, next) {
    const { userId } = req.params;
    const { postId } = req.params;

    if (userId) req.params;
  }
}
