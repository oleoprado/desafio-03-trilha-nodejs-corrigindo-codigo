function validateRespository(req, res, next) {
  const updatedRepository = req.body;

  const teste = repositories.some((repository) => repository.title === updatedRepository.title);
  if (!teste) {
    return res.status(404).json({ error: "Repository not found" });
  }
  next();
}

module.exports = validateRespository;