This section involves the following:
- Imputation
- Outliers
	- Techniques for novelty classifiers models
- Standardizing/Normalizing Data
- One-hot-encoding

The goal of this is to see if we can correctly compute the rating a restaurant contains given a various set of inputs. The original data is from yelp. Here is a representation of the data we are dealing with for this exercise.
![[Pasted image 20260203195847.png]]

First we are asked to filter content by the following criteria:
- Keep restaurants that are open `is_open = 1`

```python
def get_category(df, category='Restaurants'):

categories_ = df["categories"].dropna()

is_member = categories_[categories_.apply(lambda x:category in x.split(", "))]

return df.loc[is_member.index].copy()


data_yelp_df = get_category(data_yelp_df)
```

- `is_member` is a boolean that returns whether or 'Restaurants' is in the category for all the rows of data. 
- `df.loc[index]` returns the data points of every is_member index

Questions `
`Strings or Finding keywords in a python data set`


Next we notice the following:
![[Pasted image 20260203195724.png]]
Since the ratings are incremental values where a rating is a float value, it makes the most sense to use a regression technique over classification. 

### Regression
So far we are given a data set of yelp reviews, we have dropped null categories and only kept the rows in which the category contains `Restaraunts`. Now we want to know which of the varaibels follow the linear relationship with Ratings. Our current best option, `review_count`, as the correlation and the best fit simple line can be seen below.
![[Pasted image 20260203200352.png]]
