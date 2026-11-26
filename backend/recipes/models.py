from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()


class Category(models.Model):
    """Represents a Sri Lankan culinary category (e.g., Curries, Sambols, Sweets)."""

    name = models.CharField(max_length=100, unique=True)
    slug = models.SlugField(max_length=120, unique=True)
    description = models.TextField(blank=True)

    class Meta:
        verbose_name_plural = 'Categories'
        ordering = ['name']

    def __str__(self):
        return self.name


class Ingredient(models.Model):
    """Represents a reusable recipe ingredient (e.g., Coconut Milk, Curry Leaves)."""

    name = models.CharField(max_length=120, unique=True)
    default_unit = models.CharField(max_length=40, blank=True)

    class Meta:
        ordering = ['name']

    def __str__(self):
        return self.name


class Recipe(models.Model):
    """Core recipe model shared by users on the Sri Lankan Recipe Portal."""

    SPICE_CHOICES = [
        ('mild', 'Mild'),
        ('medium', 'Medium'),
        ('spicy', 'Spicy'),
        ('extra_spicy', 'Extra Spicy'),
    ]

    title = models.CharField(max_length=200)
    description = models.TextField()
    instructions = models.TextField()
    prep_time_minutes = models.PositiveIntegerField(default=15)
    cook_time_minutes = models.PositiveIntegerField(default=30)
    servings = models.PositiveIntegerField(default=4)
    spice_level = models.CharField(max_length=20, choices=SPICE_CHOICES, default='medium')
    region = models.CharField(max_length=100, blank=True, help_text='e.g., Jaffna, Kandyan, Southern')
    image = models.ImageField(upload_to='recipes/', blank=True, null=True)

    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='recipes')
    category = models.ForeignKey(Category, on_delete=models.PROTECT, related_name='recipes')
    ingredients = models.ManyToManyField(
        Ingredient,
        through='RecipeIngredient',
        related_name='recipes',
    )

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return self.title


class RecipeIngredient(models.Model):
    """Through model linking a Recipe and an Ingredient with quantity and unit."""

    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE, related_name='recipe_ingredients')
    ingredient = models.ForeignKey(Ingredient, on_delete=models.CASCADE, related_name='ingredient_recipes')
    quantity = models.CharField(max_length=50)
    unit = models.CharField(max_length=40, blank=True)

    class Meta:
        unique_together = ('recipe', 'ingredient')

    def __str__(self):
        return f'{self.quantity} {self.unit} {self.ingredient.name}'.strip()


class Comment(models.Model):
    """User comment and optional rating on a recipe."""

    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE, related_name='comments')
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='comments')
    body = models.TextField()
    rating = models.PositiveSmallIntegerField(default=5)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f'Comment by {self.author} on {self.recipe}'
